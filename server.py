from http.server import HTTPServer, SimpleHTTPRequestHandler
import socket

class MyHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        SimpleHTTPRequestHandler.end_headers(self)

# Obter o IP local do computador
def get_ip():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        # Não precisa estar conectado, apenas tentar
        s.connect(('10.255.255.255', 1))
        IP = s.getsockname()[0]
    except:
        IP = '127.0.0.1'
    finally:
        s.close()
    return IP

if __name__ == '__main__':
    ip = get_ip()
    port = 8000
    print(f'\nServidor iniciado em http://{ip}:{port}\n')
    print('Para acessar do celular:')
    print(f'1. Abra o navegador do celular')
    print(f'2. Digite: http://{ip}:{port}\n')
    print('Se não funcionar, tente:\n')
    print('1. Verificar se o celular está na mesma rede Wi-Fi que o computador')
    print('2. Desativar o firewall temporariamente')
    print('3. Usar o IP 127.0.0.1 no celular\n')
    
    server_address = ('', port)
    httpd = HTTPServer(server_address, MyHandler)
    httpd.serve_forever()
