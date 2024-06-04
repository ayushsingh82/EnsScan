# EnsScan

## Introduction

EnsScan is a tool designed to simplify the tracking of transactions and balances within the .eth domain. EnsScan aims to provide a one-stop solution for tracking addresses, balances, internal transactions, and external transactions.

# Features

- **Address Tracking**: Easily track addresses within the .eth domain.
- **Balance Monitoring**: Keep an eye on the balance of addresses.
- **Internal Transaction Tracking**: Monitor internal transactions within the .eth domain.
- **External Transaction Tracking**: Track external transactions involving eth domain addresses.
- **Comprehensive Portfolio Overview**: EnsScan provides a comprehensive overview of your .eth domain portfolio, including detailed information such as time, hash, and more.
- **Future Development**: The future goal of EnsScan is to evolve into a complete portfolio tracker for Eth domain . This will include additional features such as portfolio performance analysis, asset allocation insights, and customizable reporting.

![image](https://github.com/ayushsingh82/EnsScan/assets/121667116/f9ea13e3-c150-430b-8a7d-c5d56559d4fe)


#Graph query

![image](https://github.com/ayushsingh82/EnsScan/assets/121667116/da55900e-3eea-410d-bc9e-ffe1258583fb)



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


We are using The-Graph protcol for fetching the ens domain address.
After getting the ens domain address we are using etherscan to fetch the balance of user , internal transactions and normal transactions of user.
