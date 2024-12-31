---
title: Recreate Command
description: Recreating repository structure from output
---

## Overview

The `recreate` command allows you to recreate the folder and file structure from the generated `.txt` file.

## Usage

```bash
totxt recreate <txt-file> [options]
```

### Options:

- `txt-file` (required): The `.txt` file containing the repository contents 📄
- `-b, --base-path <path>` (optional): Base directory where the structure will be recreated (default: `.`) 📍

### Examples:

- **Simple Usage**:

  ```bash
  totxt recreate <output-file-location>
  ```

- **Convert a Local Repo**:
  ```bash
  totxt recreate <your-directory-name>_output.txt -b <your-directory-name>
  ```
