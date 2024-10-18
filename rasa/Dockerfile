FROM rasa/rasa:3.6.20-full

USER root


WORKDIR /app

# Pin SQLAlchemy to a version lower than 2.0
RUN pip install 'SQLAlchemy<2.0'

# Create the .rasa directory and ensure permissions
RUN mkdir -p /app/.rasa && chmod -R 777 /app/.rasa
RUN chmod -R 777 /app/config.yml

COPY . /app



EXPOSE 5005

CMD ["run", "--enable-api", "--cors", "*", "--model", "/app/models"]