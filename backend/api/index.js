const axios = require("axios");

const grant_type = "client_credentials";
const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;

let cachedToken = null;
let tokenExpiry = null;

const getAccessToken = async () => {
	const now = Date.now();

	if (cachedToken && tokenExpiry && now < tokenExpiry) {
		console.log("💾 Using cached token");
		return cachedToken;
	}

	console.log("🔄 Fetching new 42 token");

	try {
		const response = await axios.post(
			"https://api.intra.42.fr/oauth/token",
			new URLSearchParams({
				grant_type,
				client_id,
				client_secret,
			}),
			{
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
			}
		);
		cachedToken = response.data.access_token;
		tokenExpiry = now + response.data.expires_in * 1000;
		return cachedToken;
	} catch (error) {
		console.error("❌ Error fetching access token:", error);
		throw error;
	}
};

const make42Request = async (endpoint, params, retryCount = 0) => {
	const MAX_RETRIES = 1; // Prevent infinite loop

	const token = await getAccessToken();

	try {
		const response = await axios.get(
			`https://api.intra.42.fr/v2/${endpoint}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
				params,
			}
		);

		return response.data;
	} catch (error) {
		if (error.response?.status === 401 && retryCount < MAX_RETRIES) {
			cachedToken = null;
			tokenExpiry = null;
			return make42Request(endpoint, params, retryCount + 1);
		}
		throw error;
	}
};

/* (async () => {
	try {
		const token = await getAccessToken();
		console.log("Token:", token);
	} catch (error) {
		console.error("❌ Error getting token:", error);
		process.exit(1);
	}
})(); */
