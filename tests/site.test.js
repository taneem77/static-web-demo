const fs = require("fs");
const path = require("path");

const htmlPath = path.join(__dirname, "../src/index.html");
const cssPath = path.join(__dirname, "../src/style.css");

const html = fs.readFileSync(htmlPath, "utf8");

test("index.html exists", () => {
    expect(fs.existsSync(htmlPath)).toBe(true);
});

test("style.css exists", () => {
    expect(fs.existsSync(cssPath)).toBe(true);
});

test("HTML contains a title", () => {
    expect(html).toMatch(/<title>.*<\/title>/i);
});

test("HTML contains a heading", () => {
    expect(html).toMatch(/<h1>.*<\/h1>/i);
});

test("HTML contains viewport meta tag", () => {
    expect(html).toMatch(
        /<meta[^>]+name=["']viewport["']/i
    );
});