
# My Eleventy Project

Welcome to My Eleventy Project! This is a static site built using the Eleventy static site generator, with SCSS for styling, and Bootstrap for responsive design elements.

## Prerequisites

Before you get started, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v12.0.0 or higher)
- npm (usually comes with Node.js)

## Getting Started

Here's how you can get the project up and running on your local machine:

### Step 1: Clone the Repository

Clone the repository to your local machine:

\```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
\```

### Step 2: Install Dependencies

Install the necessary npm packages:

\```bash
npm install
\```

### Step 3: Run Eleventy

Start the Eleventy development server:

\```bash
npx @11ty/eleventy --serve
\```

or if you have a predefined script in `package.json`:

\```bash
npm start
\```

This will compile the site and serve it on `localhost:8080`.

### Step 4: Build SCSS (If Applicable)

If the project uses SCSS, you might need to compile it separately:

\```bash
npm run build:scss
\```

This compiles the SCSS files into CSS. Check the `package.json` for the exact command.

## Project Structure

- `src/`: Contains the source files for the Eleventy site.
- `src/scss/`: Contains SCSS files for styling.
- `src/js/`: Contains JavaScript files.
- `_site/`: The output directory where Eleventy builds the site to.

## Building for Production

To build the site for production, run:

\```bash
npx @11ty/eleventy
\```

This command generates static files in the `_site/` directory.

## Adding a New Page

To create a new page in this Eleventy project, follow these steps:

1. **Create a New HTML or Markdown File**:
   - In the `src` directory, create a new HTML (`.html`) or Markdown (`.md`) file.
   - The file name will be the path of your new page. For example, `about.html` will be accessible at `/about/`.

2. **Add Front Matter** (optional but recommended):
   - At the top of your new file, you can add front matter to specify things like the layout or title.
   - Example in an HTML file:
     ```
     ---
     layout: base.njk
     title: About Page
     ---
     <h1>About Us</h1>
     <p>This is the about page content.</p>
     ```

3. **Write Your Page Content**:
   - Below the front matter, add the content of your page using HTML or Markdown.

4. **Build and Preview Your Site**:
   - Run `npx @11ty/eleventy --serve` to build your site and preview it at `localhost:8080`.
   - Navigate to `/about/` (or the path you chose) to see your new page.

Remember to add links to your new page in your navigation for easy access.

