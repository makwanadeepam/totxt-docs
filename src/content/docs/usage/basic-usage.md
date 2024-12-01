---
title: Basic Usage
description: Basic usage of totxt
---

## 💻 Basic Usage

#### Simple Command

```bash
python totxt.py /path/to/repository
```

#### Direct conversion from GitHub

```bash
python totxt.py "https://github.com/username/repository"
# or
python totxt.py "https://github.com/username/repository.git"
```

## Advanced Options

#### Specify max file size in KB (default: 100 KB)

python totxt.py /path/to/repository --max-size 200

#### Custom output filename

python totxt.py /path/to/repository --output custom_output.txt

#### Enable verbose logging

python totxt.py /path/to/repository --verbose
