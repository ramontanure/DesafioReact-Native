import fetchAPI, {getUrl, Params, getFilter} from '..';

const pedidosEntreguesEntregador = (
  orders: any[],
  entregador: string,
  cdfilial: string,
  cdcaixa: string,
  cdloja: string,
) => {
  return new Promise((resolve: any, reject: any) => {
    getUrl(result => {
      let url = `${result}/DeliveryCheckOutOrders`;
      let options: Params = {
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify({
          page: 0,
          itemsPerPage: 100000,
          filter: [
            getFilter('ORDERS', orders),
            getFilter('CDFILIAL', cdfilial),
            getFilter('ENTREGADOR', entregador),
            getFilter('CDCAIXA', cdcaixa),
            getFilter('CDLOJA', cdloja),
          ],
          requestType: 'FilterData',
          origin: {
            containerName: 'pedidoContainer',
            widgetName: 'pedidoWidget',
          },
        }),
      };
      fetchAPI(url, options)
        .then((response: any) => resolve(response))
        .catch((error: any) => reject(error));
    });
  });
};

export default pedidosEntreguesEntregador;
