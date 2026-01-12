import os
import ftplib
import getpass

print('''
    _______________________________________________________________
    |  DEPLOY.PY                                                  |
    |                                                             |
    |  Deploy new build to specfied FTP folder.                   |
    |  If you are deleting or creating new files in the build,    |
    |  overwrite the old files.                                   |
    ---------------------------------------------------------------    
''')

ftp_host = 'ftp.initeksolutions.com'
ftp_user = "webmaster@initeksolutions.com"
ftp_pass = getpass.getpass('PASSWORD: ')
local_dir = "build"
remote_dir = "."
overwrite = input('OVERWRITE? Y/N: ')

overwrite = "y"

ftps = ftplib.FTP_TLS(ftp_host)
ftps.login(user=ftp_user, passwd=ftp_pass)
ftps.prot_p()


def upload(local_dir, remote_dir, tab=0):
    _tab = ''.join(['    ' for x in range(tab)])

    for item in os.listdir(local_dir):
        local_path = os.path.join(local_dir, item)

        if os.path.isdir(local_path):
            print(f"{_tab}Creating directory: {remote_dir}/{item}")

            ftps.mkd(f"{remote_dir}/{item}")

            upload(local_path, f"{remote_dir}/{item}", tab+1)
        
        else: 
            with open(local_path, 'rb') as file:
                print(f"{_tab}Uploading file: {item}")
                ftps.storbinary(f'STOR {remote_dir}/{item}', file)


def clear():
    local_items = os.listdir(local_dir)
    ftp_items = ftps.nlst(remote_dir)
    
    items_to_remove = [f"{remote_dir}/{x}" for x in local_items if f"{remote_dir}/{x}" in ftp_items]

    def clear_item(item, tab):
        _tab = ''.join(['    ' for _ in range(tab)])

        if "type=file" in ftps.sendcmd(f"MLST {item}"):
            print(f"{_tab}Deleting file: {item}")
            ftps.delete(item)
            return 

        files = [f for f in ftps.nlst(item) if '/.' not in f and '/..' not in f]
        
        for f in files:
            if "type=dir" in ftps.sendcmd(f"MLST {f}"):
                print(f"\n{_tab}Navigating to directory: {f}")
                clear_item(f, tab+1)

            else:
                print(f"{_tab}Deleting file: {f}")
                ftps.delete(f)

        print(f"{_tab}Deleting directory: {item}")

        ftps.rmd(item)


    for item in items_to_remove:
        clear_item(item, 0)

    print('\n')


overwrite.lower() in ['Yes', 'No', 'y', 'n'] and clear()
upload(local_dir, remote_dir)


ftps.quit()