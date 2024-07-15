import pandas as pd
import requests
import json

# Leer datos del archivo CSV
df = pd.read_csv('books.csv')

# Configurar la URL base de la API
base_url = 'https://postman-library-api.glitch.me/books'

# Iterar sobre cada fila del DataFrame y enviar un request POST
for index, row in df.iterrows():
    book_data = {
        'id': row['id'],
        'title': row['title'],
        'author': row['author'],
        'genre': row['genre'],
        'yearPublished': row['yearPublished']
    }
    response = requests.post(base_url, headers={'Content-Type': 'application/json'}, data=json.dumps(book_data))
    if response.status_code == 201:
        print(f'Book {row["id"]} created successfully.')
    else:
        print(f'Failed to create book {row["id"]}. Status code: {response.status_code}')
