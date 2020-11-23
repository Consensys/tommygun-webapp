<template>
  <div>
    <table class="styled-table ml-4 mt-4 mr-4">
      <thead>
      <tr>
        <th>Name</th>
        <th>Value</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>RPC</td>
        <td v-if="globalConfig==null"></td>
        <td v-else>{{ globalConfig.rpcUrl }}</td>
      </tr>
      <tr>
        <td>Chain ID</td>
        <td v-if="globalConfig==null"></td>
        <td v-else>{{ globalConfig.chainID }}</td>
      </tr>
      <tr>
        <td>Account creator private key</td>
        <td v-if="globalConfig==null"></td>
        <td v-else>{{ globalConfig.accountCreatorPrivateKey }}</td>
      </tr>
      <tr>
        <td>Storage creator private key</td>
        <td v-if="globalConfig==null"></td>
        <td v-else>{{ globalConfig.stateStorageCreatorPrivateKey }}</td>
      </tr>
      <tr>
        <td>Use smart contract for account creation</td>
        <td v-if="globalConfig==null"></td>
        <td v-else>{{ globalConfig.useSmartContractForAccountCreation }}</td>
      </tr>
      <tr>
        <td>Account creator slice</td>
        <td v-if="globalConfig==null"></td>
        <td v-else>{{ globalConfig.accountCreatorContractSlice }}</td>
      </tr>
      <tr>
        <td>Account creator contract initial value (ETH)</td>
        <td v-if="globalConfig==null"></td>
        <td v-else>{{ globalConfig.accountCreatorContractInitialValueEther }}</td>
      </tr>
      <tr>
        <td>Account creator contract address</td>
        <td v-if="globalConfig!=null && globalConfig.accountCreatorContractAddress !== 'undefined'">
          {{ globalConfig.accountCreatorContractAddress }}
        </td>
        <td v-else></td>
      </tr>
      <tr>
        <td>Storage creator contract address</td>
        <td v-if="globalConfig!=null && globalConfig.keyValueStoreContractAddress !== 'undefined'">
          {{ globalConfig.keyValueStoreContractAddress }}
        </td>
        <td v-else></td>
      </tr>
      <tr>
        <td>Accounts created using smart contract</td>
        <td v-if="accountInfo==null"></td>
        <td v-else>{{ accountInfo.accountsCreated }}</td>
      </tr>
      <tr>
        <td>Last created account address</td>
        <td v-if="accountInfo==null"></td>
        <td v-else>{{ accountInfo.lastCreatedAddress }}</td>
      </tr>
      <tr>
        <td>Storage entries in smart contract</td>
        <td v-if="stateInfo==null"></td>
        <td v-else>{{ stateInfo.stateEntriesNumber }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Info",
  data() {
    return {
      globalConfig: null,
      accountInfo: null,
      stateInfo: null,
    }
  },
  mounted() {
    this.$store.state.services.info.globalConfig().then(result => this.globalConfig = result);
    this.$store.state.services.account.getInfo().then(result => this.accountInfo = result);
    this.$store.state.services.state.getInfo().then(result => this.stateInfo = result);
  },
}
</script>


<style scoped>
.styled-table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.styled-table thead tr {
  background-color: #009879;
  color: #ffffff;
  text-align: left;
}

.styled-table th,
.styled-table td {
  padding: 12px 15px;
}

.styled-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}

.styled-table tbody tr.active-row {
  font-weight: bold;
  color: #009879;
}
</style>