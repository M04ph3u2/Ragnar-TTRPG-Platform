# Repository Unificata

Questa repository contiene il codice di più progetti unificati in branch separati.

## Struttura dei Branch

### `hp-main` - HeatPeakWebApp
Contiene il codice del progetto HeatPeakWebApp (applicazione web per il monitoraggio dei picchi di calore).

### `jh-main` - JuggleHive WebApp Main
Contiene il branch main del progetto JuggleHive WebApp.

### `jh-dev` - JuggleHive WebApp Development
Contiene il branch di sviluppo del progetto JuggleHive WebApp.

### `jh-devops` - JuggleHive DevOps
Contiene i file e gli script DevOps per il deployment e la gestione dell'infrastruttura di JuggleHive.

### `jh-cloud` - JuggleHive Cloud Configuration
Contiene le configurazioni cloud per JuggleHive (Docker Compose, Kubernetes, ecc.).

## Come Lavorare con i Branch

Per switchare tra i diversi progetti:

```bash
# Lavorare su HeatPeakWebApp
git checkout hp-main

# Lavorare su JuggleHive WebApp (main)
git checkout jh-main

# Lavorare su JuggleHive WebApp (development)
git checkout jh-dev

# Lavorare sui file DevOps
git checkout jh-devops

# Lavorare sulle configurazioni cloud
git checkout jh-cloud
```

## Storia dei Progetti

Questi branch sono stati creati unificando diverse repository separate:
- `hp-main`: da HeatPeakWebApp/main
- `jh-main`: da webapp/main
- `jh-dev`: da webapp/dev
- `jh-devops`: da devops/main
- `jh-cloud`: da cloud/main

Data di unificazione: $(date)

## License

This project is licensed under the Attribution-NonCommercial-NoDerivatives 4.0 International License. See the [LICENSE.md](LICENSE.md) file for details.
