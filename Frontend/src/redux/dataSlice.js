import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from "axios"

export const getCategories = createAsyncThunk(
    'data/getCategories',
    async () => {
        try {
            const categoriesData = await axios.get('/api/categories');
            return categoriesData.data;
        } catch (err) {
            console.error(err);
        }
    }
)

export const getBrands = createAsyncThunk(
    'data/getBrands',
    async () => {
        try {
            const brands = await axios.get('/api/brands');
            return brands.data;
        } catch (err) {
            console.error(err);
        }
    }
)


export const dataSlice = createSlice ({
    name:'data',
    initialState:{
        categoriesList:null,
        categoriesStatus:null,
        brandsList:null,
        brandsStatus:null
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCategories.pending, (state, action) => {
                state.categoriesStatus = 'loading';
            })
            .addCase(getCategories.fulfilled,(state, action) => {
                state.categoriesList = action.payload;
                state.categoriesStatus = 'success';
            })
            .addCase(getCategories.rejected, (state,action) => {
                state.categoriesStatus = 'failed';
            })
            .addCase(getBrands.pending, (state, action) => {
                state.brandsStatus = 'loading';
            })
            .addCase(getBrands.fulfilled,(state, action) => {
                state.brandsList = action.payload;
                state.brandsStatus = 'success';
            })
            .addCase(getBrands.rejected, (state,action) => {
                state.brandsStatus = 'failed';
            })
    }
})

export const selectData = state => state.data;

export default dataSlice.reducer;