FROM python:3

ENV PYTHONUNBUFFERED 1

RUN mkdir /proyect

WORKDIR /proyect
COPY requirements.txt /proyect/
RUN pip install -r requirements.txt

COPY . /proyect/