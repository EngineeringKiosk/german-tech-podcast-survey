.PHONY: help install dev build generate preview clean

help: ## Show this help message
	@echo "Usage: make [target]"
	@echo ""
	@echo "Targets:"
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-20s\033[0m %s\n", $$1, $$2}'

install: ## Install dependencies
	npm install

dev: ## Start development server
	npm run dev

build: ## Build the application
	npm run build

generate: ## Generate static site
	npm run generate

preview: ## Preview the production build
	npm run preview

clean: ## Clean up build artifacts
	rm -rf .nuxt .output dist

clean-all: ## Clean up build artifacts and dependencies
	rm -rf .nuxt .output dist node_modules
