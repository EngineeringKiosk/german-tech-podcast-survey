.PHONY: help \
	frontend-install frontend-dev frontend-build frontend-generate frontend-preview frontend-clean \
	server-install server-dev server-build server-start \
	docker-build docker-up docker-down \
	install dev clean

help: ## Show this help message
	@echo "Usage: make [target]"
	@echo ""
	@echo "Targets:"
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-28s\033[0m %s\n", $$1, $$2}'

# ── Frontend (Nuxt) ──────────────────────────────────────────────────────────

frontend-install: ## Install frontend dependencies
	cd frontend && npm install

frontend-dev: ## Start frontend development server
	cd frontend && npm run dev

frontend-build: ## Build the frontend application
	cd frontend && npm run build

frontend-generate: ## Generate static frontend site
	cd frontend && npm run generate

frontend-preview: ## Preview the frontend production build
	cd frontend && npm run preview

frontend-clean: ## Clean up frontend build artifacts
	rm -rf frontend/.nuxt frontend/.output frontend/dist

# ── Server (Node.js) ─────────────────────────────────────────────────────────

server-install: ## Install server dependencies
	cd server && npm install

server-dev: ## Start server in development mode (with watch)
	cd server && npm run dev

server-build: ## Build the server
	cd server && npm run build

server-start: ## Start the server in production mode
	cd server && npm start

# ── Docker ───────────────────────────────────────────────────────────────────

docker-build: ## Build Docker image for the server
	docker compose build

docker-up: ## Start the server container in the background
	docker compose up -d

docker-down: ## Stop and remove server containers
	docker compose down

# ── Convenience ──────────────────────────────────────────────────────────────

install: frontend-install server-install ## Install all dependencies

dev: ## Start both frontend and server in development mode (requires two terminals)
	@echo "Run 'make frontend-dev' and 'make server-dev' in separate terminals."

clean: frontend-clean ## Clean all build artifacts
	rm -rf server/dist

clean-all: clean ## Clean all build artifacts and dependencies
	rm -rf frontend/node_modules server/node_modules
