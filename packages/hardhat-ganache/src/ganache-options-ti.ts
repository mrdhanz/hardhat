/**
 * This module was automatically generated by `ts-interface-builder`
 */
import * as t from "ts-interface-checker";

export const GanacheOptionsTi = t.iface([], {
  url: "string",
  keepAliveTimeout: t.opt("number"),
  accountKeysPath: t.opt("string"),
  accounts: t.opt(t.array("object")),
  allowUnlimitedContractSize: t.opt("boolean"),
  blockTime: t.opt("number"),
  dbPath: t.opt("string"),
  debug: t.opt("boolean"),
  defaultBalanceEther: t.opt("number"),
  fork: t.opt(t.union("string", "object")),
  forkBlockNumber: t.opt(t.union("string", "number")),
  gasLimit: t.opt("number"),
  gasPrice: t.opt(t.union("string", "number")),
  hardfork: t.opt(
    t.union(
      t.lit("byzantium"),
      t.lit("constantinople"),
      t.lit("petersburg"),
      t.lit("istanbul"),
      t.lit("muirGlacier")
    )
  ),
  hdPath: t.opt("string"),
  hostname: t.opt("string"),
  locked: t.opt("boolean"),
  logger: t.opt(
    t.iface([], {
      log: t.func("void", t.param("msg", "string")),
    })
  ),
  mnemonic: t.opt("string"),
  network_id: t.opt("number"),
  networkId: t.opt("number"),
  port: t.opt("number"),
  seed: t.opt("any"),
  time: t.opt("any"),
  totalAccounts: t.opt("number"),
  unlockedAccounts: t.opt(t.array("string")),
  verbose: t.opt("boolean"),
  vmErrorsOnRPCResponse: t.opt("boolean"),
  ws: t.opt("boolean"),
});

const exportedTypeSuite: t.ITypeSuite = {
  GanacheOptionsTi,
};
// eslint-disable-next-line import/no-default-export
export default exportedTypeSuite;
