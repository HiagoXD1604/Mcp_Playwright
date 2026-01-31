# MCP Playwright - Intelligent Test Automation Framework

A comprehensive Playwright-based test automation framework integrated with MCP (Model Context Protocol) tools for intelligent test planning, generation, and maintenance. This project demonstrates enterprise-grade testing practices with AI-assisted test creation and management.

## 📋 Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Using MCP Tools](#using-mcp-tools)
  - [Planner](#planner-test-planning)
  - [Generator](#generator-test-creation)
  - [Healer](#healer-test-repair)
- [Test Coverage](#test-coverage)
- [Configuration](#configuration)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)

## 🎯 Overview

MCP Playwright is an intelligent test automation framework that combines:

- **Playwright**: Cross-browser testing with Chromium, Firefox, and WebKit
- **MCP Integration**: AI-powered test planning, code generation, and automatic healing
- **Test Scalability**: Efficient parallel test execution with comprehensive reporting
- **Enterprise Ready**: Multi-browser support, CI/CD integration, and detailed test reports

### Key Features

- ✅ **AI-Assisted Test Creation** - Generate tests automatically from test plans
- ✅ **Intelligent Test Planning** - Create comprehensive test scenarios with AI guidance
- ✅ **Auto-Healing Tests** - Automatically fix broken tests with element locator updates
- ✅ **Multi-Browser Testing** - Run tests across Chromium, Firefox, and WebKit
- ✅ **Parallel Execution** - Execute tests efficiently using worker threads
- ✅ **HTML Reports** - Detailed test reports with screenshots and traces
- ✅ **Accessibility Testing** - Built-in accessibility snapshot capability

## 📁 Project Structure
```bash
mcp_playwright/
├── tests/                       # Generated test files
│   ├── text-box-happy-path.spec.ts
│   ├── text-box-empty-submit.spec.ts
│   ├── text-box-invalid-email.spec.ts
│   ├── text-box-long-text.spec.ts
│   └── text-box-special-chars.spec.ts
│
├── e2e/                         # End-to-end test seeds
│   ├── seed.spec.ts             # Test setup seed
│   └── example.spec.ts          # Example tests
│
├── specs/                       # Test plans and documentation
│   ├── README.md
│   └── text-box-test-plan.md    # Example test plan
│
├── playwright-report/           # Generated HTML test reports
├── test-results/                # Test execution results
│
├── playwright.config.ts         # Playwright configuration
├── package.json                 # Project dependencies
└── README.md                    # This file

```


## 🔧 Prerequisites

- **Node.js**: v18.0 or higher
- **npm**: v9.0 or higher
- **Git**: For version control
- **Modern Browser**: For viewing HTML reports (Chrome, Firefox, Safari)
- **VS Code**: Recommended for using MCP tools integration

## 📦 Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd mcp_playwright
```

2. Install Dependencies
```bash
npm install
```

This will install:

@playwright/test: v1.58.1 - Testing framework
@types/node: v25.1.0 - TypeScript type definitions
3. Install Playwright Browsers
```bash
npx playwright install
```
This downloads the browser binaries for:

Chromium
Firefox
WebKit (Safari)
🚀 Running Tests
Run All Tests
```bash
npx playwright test
```
This executes all tests across all configured browsers in parallel.

Run Tests in Specific Browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

Test results and timing
Screenshots
Video recordings (if enabled)
Browser traces
🤖 Using MCP Tools
MCP (Model Context Protocol) tools provide intelligent test automation capabilities through VS Code integration.

Planner: Test Planning
The Planner tool helps create comprehensive test scenarios for any web application.

How to Use:
1.Identify Target Application

- Determine the application or feature to test
- Note the URL and main functionality
2.Set Up Test Page
```bash
# In VS Code with MCP extension
- Use "MCP Planner Setup Page" command
- Provide seed file and target URL
- Example: https://demoqa.com/text-box
```
Explore Application

- Use browser snapshots to identify interactive elements
- Document user flows and edge cases
- Note validation rules and error conditions
4.Create Test Plan

- Define test scenarios with clear steps
- Include expected outcomes for each step
- Cover happy paths, edge cases, and error scenarios
**Example Test Plan Output:**
See text-box-test-plan.md for a complete example.
