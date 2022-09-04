import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMerchantWallets, getWithdrawRequest } from "../../../services/admin";

const initialState={
      walletList:{
            isLoading: false,
            wallets:null
      },
      withdrawalRequest:{
            request:null,
            isLoading: false,
      }

}

export const _getMerchantWallets = createAsyncThunk("wallet/getMerchantWallets", async()=>{
      return await getMerchantWallets()
})

export const _getWithdrawRequest = createAsyncThunk("wallet/getWithdrawRequest", async(status)=>{
      return await getWithdrawRequest(status)
})

let walletSlice = createSlice({
      name: "wallet",
      initialState,
      reducers:{},
      extraReducers:{

            [_getMerchantWallets.pending] :(state)=>{
                  state.walletList.isLoading = true
            },
            [_getMerchantWallets.fulfilled] :(state, action)=>{
                  state.walletList.isLoading = false
                  state.walletList.wallets = action.payload.data.wallet
            },


            [_getWithdrawRequest.pending] :(state)=>{
                  state.withdrawalRequest.isLoading = true
            },
            [_getWithdrawRequest.fulfilled] :(state, action)=>{
                  state.withdrawalRequest.isLoading = false
                  state.withdrawalRequest.request = action.payload.data.wallet
            },
      }
})

export default walletSlice.reducer