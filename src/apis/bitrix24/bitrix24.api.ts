import { bitrixInstance } from "../axios.instant";
import { InputType } from "../types";

export class BitrixApis {
  // API for art dev tools
  static async getTransactions(arg?: InputType<any>): Promise<any> {
    const data = (await bitrixInstance.post(`/crm.deal.list`, {
      order: { DATE_CREATE: "DESC" }, // Sort by creation date in descending order
    })) as any;
    console.log("[getTransactions] data", data);
    if (data?.result) {
      arg?.onSuccess?.(data.result);
    } else {
      arg?.onError?.();
    }
    return data;
  }

  // API for art dev tools
  static async getTransactionDetail(arg?: InputType<string>): Promise<any> {
    const data = (await bitrixInstance.post(`/crm.deal.get`, {
      ID: arg?.payload, // Sort by creation date in descending order
    })) as any;
    console.log("[getTransactionDetail] data", data);
    if (data?.result) {
      arg?.onSuccess?.(data.result);
    } else {
      arg?.onError?.();
    }
    return data;
  }

  // API for art dev tools
  static async createTransactions(arg?: InputType<any>): Promise<any> {
    const data = (await bitrixInstance.post(
      `/crm.deal.add`,
      arg?.payload
    )) as any;
    console.log("[createTransactions] data", data);
    if (data?.result) {
      arg?.onSuccess?.(data.result);
    } else {
      arg?.onError?.();
    }
    return data;
  }
}
