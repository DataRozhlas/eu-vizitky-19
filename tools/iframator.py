#%%
import pandas as pd
import json
import os
import numpy as np

#%%
serk = pd.read_excel('./tools/vizitky_vyplnene2019.xls')

#%%
out = '<!DOCTYPE html><meta charset="UTF-8">'
for k in serk.to_dict(orient='index').values():
    out += '<h2 id="' + k['soubor'] + '">' + k['JMENO'] + ' ' + k['PRIJMENI'] + ' (' + k['partaj'] + '), kandidát č. ' + str(k['PORCISLO']) + '</h2>Kód pro vložení do stránky:<br> <textarea style="width: 100%; min-height: 20px" disabled><iframe name="kandidat-na-euposlance" src="https://data.irozhlas.cz/eu-vizitky-19/iframe.html#' + k['soubor'] + '" width="100%" height="239"></iframe></textarea>'

#%%
with open('./iframes.html', 'w', encoding='utf-8') as f:
    f.write(out)


