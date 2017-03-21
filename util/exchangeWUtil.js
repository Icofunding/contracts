const { createFill, createBatchFill, createFillUpTo, createCancel, createBatchCancel } = require('./formatUtil.js');

module.exports = exchangeW => {
  const exchangeWUtil = {
    fill: (order, { fillValueM, from }) => {
      const params = createFill(order, null, fillValueM);
      return exchangeW.fill(
        params.traders,
        params.feeRecipient,
        params.tokens,
        params.values,
        params.fees,
        params.expiration,
        params.fillValueM,
        params.v,
        params.rs,
        { from }
      );
    },
    fillOrKill: (order, { fillValueM, from }) => {
      const params = createFill(order, null, fillValueM);
      return exchangeW.fillOrKill(
        params.traders,
        params.feeRecipient,
        params.tokens,
        params.values,
        params.fees,
        params.expiration,
        params.fillValueM,
        params.v,
        params.rs,
        { from }
      );
    },
    batchFill: (orders, { fillValuesM, from }) => {
      const params = createBatchFill(orders, fillValuesM);
      return exchangeW.batchFill(
        params.traders,
        params.feeRecipients,
        params.tokens,
        params.values,
        params.fees,
        params.expirations,
        params.fillValuesM,
        params.v,
        params.rs,
        { from }
      );
    },
    batchFillOrKill: (orders, { fillValuesM, from }) => {
      const params = createBatchFill(orders, fillValuesM);
      return exchangeW.batchFillOrKill(
        params.traders,
        params.feeRecipients,
        params.tokens,
        params.values,
        params.fees,
        params.expirations,
        params.fillValuesM,
        params.v,
        params.rs,
        { from }
      );
    },
    fillUpTo: (orders, { fillValueM, from }) => {
      const params = createFillUpTo(orders, fillValueM);
      return exchangeW.fillUpTo(
        params.traders,
        params.feeRecipients,
        params.tokens,
        params.values,
        params.fees,
        params.expirations,
        params.fillValueM,
        params.v,
        params.rs,
        { from }
      );
    },
    cancel: (order, { cancelValueM, from }) => {
      const params = createCancel(order, null, cancelValueM);
      return exchangeW.cancel(
        params.traders,
        params.tokens,
        params.values,
        params.expiration,
        params.cancelValueM,
        { from }
      );
    },
    batchCancel: (orders, { cancelValuesM, from }) => {
      const params = createBatchCancel(orders, cancelValuesM);
      return exchangeW.batchCancel(
        params.traders,
        params.tokens,
        params.values,
        params.expirations,
        params.cancelValuesM,
        { from }
      );
    },
  };
  return exchangeWUtil;
};
