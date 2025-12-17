import json
import urllib.request
import urllib.error
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Прокси-сервер для обхода ограничений iframe
    Перенаправляет запросы к внешнему сайту оплаты
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    target_url = 'https://oplatagosuslug.ru/poshliny_gibdd/'
    query_params = event.get('queryStringParameters', {})
    
    if query_params:
        query_string = '&'.join([f"{k}={v}" for k, v in query_params.items()])
        target_url = f"{target_url}?{query_string}"
    
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
        
        req = urllib.request.Request(target_url, headers=headers)
        
        with urllib.request.urlopen(req, timeout=30) as response:
            content = response.read().decode('utf-8')
            content_type = response.headers.get('Content-Type', 'text/html')
            
            content = content.replace('oplatagosuslug.ru', event.get('headers', {}).get('host', 'localhost'))
            
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': content_type,
                    'Access-Control-Allow-Origin': '*',
                    'X-Frame-Options': 'ALLOWALL'
                },
                'body': content,
                'isBase64Encoded': False
            }
    
    except urllib.error.HTTPError as e:
        return {
            'statusCode': e.code,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': f'HTTP Error {e.code}'}),
            'isBase64Encoded': False
        }
    
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': str(e)}),
            'isBase64Encoded': False
        }
