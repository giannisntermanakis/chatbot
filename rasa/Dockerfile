FROM rasa/rasa:3.6.20-full

WORKDIR /app

# Pin SQLAlchemy to a version lower than 2.0
RUN pip install 'SQLAlchemy<2.0'

COPY . /app

EXPOSE 5005

CMD ["run", "--enable-api", "--cors", "*", "--model", "/app/models"]