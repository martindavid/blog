---
title: Python Development Workflow with Pyenv
date: '2018-08-25 20:37:29'
tags: ['python']
draft: false
summary: I've been using Python programming language professionally for a year now. Previously, I only use python mostly on my uni assignment or some side project work using Raspberry Pi. Since the first time I know python, I have been used a combination of `virtualenv` and `virtualenvwrapper` to manage my local python virtual environment and set up my python development workflow. If you are not using virtual environment on your development workflow, I suggest you to start using it because it will save you with many problems in regards to package versioning and also makes your system environment clean.
images:
  [
    'https://res.cloudinary.com/martin-labs/image/upload/q_auto/v1535193883/Blog/python-logo-on-laptop.png',
  ]
layout: PostLayout
---

I've been using Python programming language professionally for a year now. Previously, I only use python mostly on my uni assignment or some side project work using Raspberry Pi. Since the first time I know python, I have been used a combination of `virtualenv` and `virtualenvwrapper` to manage my local python virtual environment and set up my python development workflow. If you are not using virtual environment on your development workflow, I suggest you to start using it because it will save you with many problems in regards to package versioning and also makes your system environment clean.

# My Legacy Workflow

My typical python development workflow:

```bash
$ mkdir my-awesome-project
$ mkvirtualenv my-awesome-project --python=python3
$ pip install <my-awesome-project-dependencies>
$ setvirtualenvproject my-awesome-project .
```

The above steps are what I usually do when I start a new project.

- I create a new folder for my project.
- Create new `virtualenv` (I use `python3`)
- Install all of my project dependencies
- Set default folder for the virtual environment that's newly created.

Once I've done above step, whenever I want to work on `my-awesome-project` I can just open up a new terminal and type `workon my-awesome-project`, it automatically activates `my-awesome-project` virtualenv and enters my project directory.

That workflow works well for me since the first time I knew python and never change since then. However, then I found a problem want to try a new version of python, for example, I have python 3.5 installed on my machine, and I want to try version 3.6 before decided to upgrade to a new version. In my legacy workflow, there is no way I can try a new version of python without actually install it on my machine.

# Pyenv to the rescue

With the recent release of Python 3.7, I decided to figure out how can I have multiple version of python installed on my machine. If you ever use other languages such as javascript or ruby they have this tool called `nvm` (nodejs) and `rbenv` (ruby), that manage different version of language runtime installed on one machine. I google similar thing for python and then `pyenv` come up. This tool allows us to install multiple versions of python on one machine.

In the next couple of sections, I will describe how you can install this tool in OSX and Ubuntu 18.04 and also how I incorporate this tool into my development workflow and make it more seamless and convenient than before.

## Install pyenv on OSX

Install `pyenv` in OSX is pretty straightforward. Assume you have `homebrew` installed already

```bash
$ brew update
$ brew install pyenv
```

## Install pyenv on Ubuntu 18.04

The steps I provide below works well on Ubuntu 18.04. I assume it will work with the previous version (but I don't guarantee it)

```
$ apt-get update
$ apt-get -y upgrade
$ apt-get install -y build-essential libbz2-dev libssl-dev libreadline-dev libsqlite3-dev tk-dev
$ curl -L https://raw.githubusercontent.com/pyenv/pyenv-installer/master/bin/pyenv-installer | bash
```

After it's installed successfully, you can put this at the end of your shell configuration file (`.bash_profile` or `.zshrc`) so it will automatically load when you launch your terminal.

```
$ export PATH="~/.pyenv/bin:$PATH"
$ eval "$(pyenv init -)"
$ eval "$(pyenv virtualenv-init -)"
$ source ~/.zshrc # or .bash_profile if you're using bash
```

# My new awesome development workflow

After I successfully install `pyenv`, I can start to play around with a different version of python and also incorporate it into my development workflow. The first thing that I do is install the python version that I want, in this case, I want to keep python 3.6 and also want to play with python 3.7.

```
pyenv install 3.6.6

# after it successfully installed, you can install version 3.7

pyenv install 3.7.0
```

After everything is successfully installed, I can start playing around with it.

notes: if you want to make python 3.6.6 as your default system python version, then you can run this

```
$ pyenv global 3.6.6
```

### New Project

```
$ mkdir new-awesome-project
$ pyenv virtualenv 3.6.6 new-awesome-project
$ cd new-awesome-project
$ echo "new-awesome-project" > .python-version'
```

The above step is what I'm doing to start a new project

1. Create a new folder for my project
2. Create new virtual environment using python 3.6.6 and name it `new-awesome-project`
3. Go into the project folder
4. Add `.python-version` file and inside it put the name of the virtual environment that this project will use. After adding `.python-version`, Your shell will automatically detect the required virtual environment for this project and activate it immediately. So now every time I enter the directory, it will `activate` my `new-awesome-project` virtual environment, and if I exit the directory, it will `deactivate` it.

Let say you want to try to play around with python 3.7. You can do a similar thing like the previous steps.

```
$ mkdir python37-sandbox
$ pyenv virtualenv 3.7.0 play-with-python3.7
$ cd python37-sandbox
$ echo "play-with-python3.7" > .python-version
```

After I run above command, I immediately can play around with python 3.7 in a new virtual environment.

### Existing project

For the existing project, what you can do is:

- create virtualenv for the existing project
- add `.python-version` file in the root folder of the existing project
  - put the name of the virtualenv inside that file
- pip install again all requirements for the project

Now every time you enter the project directory, it will activate the virtualenv

# Conclusion

I found that `pyenv` is a convenient package that helps me to manage different version of python installed on my machine. The integration with my shell also makes it easy to activate the virtualenv (hint: it will be active immediately after we enter the directory)

I hope you enjoy reading this post and this information can be useful to you.

### Appendix

If you encountered this error while installing `python 3.7.0` on ubuntu

```
BUILD FAILED (Ubuntu 18.04 using python-build 20180424)

Inspect or clean up the working tree at /tmp/python-build.20180825095753.30081
Results logged to /tmp/python-build.20180825095753.30081.log

Last 10 log lines:
  File "/tmp/tmp0ibkfc84/pip-10.0.1-py2.py3-none-any.whl/pip/_internal/__init__.py", line 42, in <module>
  File "/tmp/tmp0ibkfc84/pip-10.0.1-py2.py3-none-any.whl/pip/_internal/cmdoptions.py", line 16, in <module>
  File "/tmp/tmp0ibkfc84/pip-10.0.1-py2.py3-none-any.whl/pip/_internal/index.py", line 25, in <module>
  File "/tmp/tmp0ibkfc84/pip-10.0.1-py2.py3-none-any.whl/pip/_internal/download.py", line 39, in <module>
  File "/tmp/tmp0ibkfc84/pip-10.0.1-py2.py3-none-any.whl/pip/_internal/utils/glibc.py", line 3, in <module>
  File "/tmp/python-build.20180825095753.30081/Python-3.7.0/Lib/ctypes/__init__.py", line 7, in <module>
    from _ctypes import Union, Structure, Array
ModuleNotFoundError: No module named '_ctypes'
Makefile:1122: recipe for target 'install' failed
make: *** [install] Error 1
```

You can try to install the required package first

```
$ apt-get install libffi-dev
```
