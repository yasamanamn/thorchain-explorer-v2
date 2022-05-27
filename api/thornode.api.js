// axios instance
import { $axiosInstace } from './index';

export function getMimir() {
  return $axiosInstace.get(process.env.THORNODE_URL + 'thorchain/mimir');
}

export function getBalance(address) {
  return $axiosInstace.get(process.env.THORNODE_URL + `bank/balances/${address}`);
}

export function getLastBlockHeight() {
  return $axiosInstace.get(process.env.THORNODE_URL + 'thorchain/lastblock');
}

export function getBlockChainVersion() {
  return $axiosInstace.get(process.env.THORNODE_URL + 'thorchain/version');
}

export function getRPCLastBlockHeight() {
  return $axiosInstace.get(process.env.THORNODE_URL + 'blocks/latest');
}

export function getNativeTx(txID) {
  return $axiosInstace.get(process.env.THORNODE_URL + `cosmos/tx/v1beta1/txs/${txID}`);
}

export function getThorNetwork() {
  return $axiosInstace.get(process.env.THORNODE_URL + `thorchain/network`);
}

export function getInboundAddresses() {
  return $axiosInstace.get(process.env.THORNODE_URL + `thorchain/inbound_addresses`);
}

export function getMimirVotes() {
  return $axiosInstace.get(process.env.THORNODE_URL + `thorchain/mimir/nodes_all`);
}

export function getLpPositions(poolName) {
  return $axiosInstace.get(process.env.THORNODE_URL + `thorchain/pool/${poolName}/liquidity_providers`);
}

export function getPoolDetail(poolName) {
  return $axiosInstace.get(process.env.THORNODE_URL + `thorchain/pool/${poolName}`);
}

export function getAssets() {
  return $axiosInstace.get(process.env.THORNODE_URL + `cosmos/bank/v1beta1/supply`);
}

export function getSupplyRune() {
  return $axiosInstace.get(process.env.THORNODE_URL + `cosmos/bank/v1beta1/supply/rune`);
}

export function getThorPools() {
  return $axiosInstace.get(process.env.THORNODE_URL + `thorchain/pools`);
}

export function getYggdrasil() {
  return $axiosInstace.get(process.env.THORNODE_URL + `thorchain/vaults/yggdrasil`);
}

export function getAsgard() {
  return $axiosInstace.get(process.env.THORNODE_URL + `thorchain/vaults/asgard`);
}

export function getAddresses() {
  return $axiosInstace.get(process.env.THORNODE_URL + `cosmos/auth/v1beta1/accounts`);
}

export function getOutbound() {
  return $axiosInstace.get(process.env.THORNODE_URL + `thorchain/queue/outbound`);
}

export function getThorchainTx(txID) {
  return $axiosInstace.get(process.env.THORNODE_URL + `thorchain/tx/${txID}`);
}