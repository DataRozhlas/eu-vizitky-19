#%%
import pandas as pd

#%%
import os
os.listdir('./')

#%%
lidi = pd.read_csv('./tools/ciselniky/eprk.csv', encoding='windows-1250', sep=';')
strany = pd.read_csv('./tools/ciselniky/eprkl.csv', encoding='windows-1250', sep=';')

#%%
strany = strany[['ESTRANA', 'ZKRATKAE30']].set_index('ESTRANA').to_dict(orient='index')

#%%

lidi['partaj'] = lidi.ESTRANA.apply(lambda x: strany[x]['ZKRATKAE30'])

#%%
lidi.columns

#%%
lidi = lidi[['ESTRANA', 'PORCISLO', 'JMENO', 'PRIJMENI', 'TITULPRED', 'TITULZA',
       'VEK', 'STATOBCAN', 'POVOLANI', 'BYDLISTEN', 'partaj']]

#%%
lidi['soubor'] = lidi.apply(lambda row: str(row[0]) + '_' + str(row[1]) , axis=1)

#%%
lidi[lidi.PORCISLO == 1].to_excel('./tools/lidi_vzor.xls', index=False)

#%%
