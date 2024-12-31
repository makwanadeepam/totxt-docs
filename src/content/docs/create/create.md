---
title: Create Command
description: Usage of totxt create
---

## Overview

The `create` command allows you to convert the folder and file structure to a `.txt` file. (For LLM ingestion)

## Usage

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
