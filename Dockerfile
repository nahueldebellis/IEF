FROM python:3

ENV PYTHONUNBUFFERED 1

RUN mkdir /IEF

WORKDIR /IEF
COPY requirements.txt /IEF/
RUN pip install -r requirements.txt

COPY . /IEF/