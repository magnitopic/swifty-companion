# Colours
RED				=	\033[0;31m
GREEN			=	\033[0;32m
YELLOW			=	\033[0;33m
BLUE			=	\033[0;34m
PURPLE			=	\033[0;35m
CYAN			=	\033[0;36m
WHITE			=	\033[0;37m
RESET			=	\033[0m

all:	up
	@printf "$(BLUE)==> $(CYAN)swifty-companion running ✅\n\n$(RESET)"

up:
	docker compose up -d

down:
	docker compose down

logs:
	docker compose logs -f frontend

attach:
	docker attach frontend

clean:
	docker compose down -v --remove-orphans

fclean:
	docker compose down --rmi all --volumes --remove-orphans

install:
	docker compose exec frontend npm install

re:	fclean all

.PHONY: all up down logs attach clean fclean install re
