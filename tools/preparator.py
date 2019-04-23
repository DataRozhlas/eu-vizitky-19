#%%
import pandas as pd
import json
import os
import numpy as np

#%%
serk = pd.read_excel('./tools/vizitky_vyplnene2019.xls')

#%%
serk.poznamka.fillna('', inplace=True)
serk.zvuk.fillna('', inplace=True)

#%%
out = {}
for kand in serk.values:
    out[kand[0]] = {
        'jmeno': kand[2] + ' ' + kand[3],
        'povolani': kand[8],
        'partaj': kand[10],
        'file': kand[11],
        'afile': kand[12],
        'pozn': kand[13]}

#%%
done = []
for fle in os.listdir('./media/foto'):
    try:
        done.append(int(fle.split('_')[0]))
    except:
        pass

#%%
np.unique(done)

#%%
with open('./js/data.js', 'w', encoding='utf-8') as f:
    f.write('export const data = ' + json.dumps(out, ensure_ascii=False) + ';', )

