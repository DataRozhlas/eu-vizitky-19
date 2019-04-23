#%%
import pandas as pd
import json
import os
import numpy as np

#%%
serk = pd.read_excel('./vizitky_vyplnene2019.xls')

#%%
out = '<!DOCTYPE html><meta charset="UTF-8">'
for k in serk.to_dict(orient='index').values():
    out += '<h2 id="' + str(k['soubor']) + '">' + k['JMENO'] + ' ' + k['PRIJMENI']     + ' (' + k['partaj'] + '), kandidát č. ' + str(k['PORCISLO
']) + '</h2>Kód pro vložení do stránky:<br> <textarea style="width: 100%; min-height: 20px" disabled><iframe name="kandidat-na-euposlance" src="https://www.irozhlas.cz/volby/eu-volby-2019/kandidati-vizitky/kandidat-na-senatora?' + str(k['OBVOD']) + '_' + str(k['CKAND']) + '" width="100%" height="239"></iframe></textarea>'

#%%
with open('./iframes.html', 'w', encoding='utf-8') as f:
    f.write(out)


