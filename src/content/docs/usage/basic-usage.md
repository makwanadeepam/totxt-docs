---
title: Create Command
description: Usage of totxt create
---

## Overview

### `create` - Convert Repository to Text File

Convert a local or GitHub repository into a `.txt` file containing its code and content.

## 💻 Usage

```bash
totxt create <path> [options]
```

#### Options:

- `path` (required): Path to your local repository or GitHub URL 🌍
- `-m, --max-size <size>` (optional): Maximum file size in KB to include (default: 100 KB) 📏
- `-o, --output <filename>` (optional): Output text file name (default: `<repo-name>_output.txt`) 🖋️

#### Examples:

- **Simple Usage**:
  ```bash
  totxt create <path>
  ```
- **Convert a GitHub Repo**:
  ```bash
  totxt create https://github.com/username/repository -o <your-directory-name>_output.txt
  ```
- **Convert a Local Repo**:
  ```bash
  totxt create /path/to/your/repo -o <your-directory-name>_output.txt
  ```
