import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const mailchimpapi_post_modules_mailchimp_templates_addtemplate_create = createAsyncThunk(
  "mailchimpapi_response_post_AddTemplateInFolders/mailchimpapi_post_modules_mailchimp_templates_addtemplate_create",
  async payload => {
    const response = await apiService.mailchimpapi_post_modules_mailchimp_templates_addtemplate_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const mailchimpapi_response_post_AddTemplateInFoldersSlice = createSlice({
  name: "mailchimpapi_response_post_AddTemplateInFolders",
  initialState,
  reducers: {},
  extraReducers: {
    [mailchimpapi_post_modules_mailchimp_templates_addtemplate_create.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [mailchimpapi_post_modules_mailchimp_templates_addtemplate_create.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [mailchimpapi_post_modules_mailchimp_templates_addtemplate_create.rejected]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  mailchimpapi_post_modules_mailchimp_templates_addtemplate_create,
  slice: mailchimpapi_response_post_AddTemplateInFoldersSlice
}
