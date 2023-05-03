import axios from "axios"
const mailchimpAPI = axios.create({
  baseURL: "https://cbmodules-39279.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function mailchimpapi_post_modules_mailchimp_templates_addtemplate_create(
  payload
) {
  return mailchimpAPI.post(
    `/modules/mailchimp/templates/add-template/`,
    payload.data
  )
}
function mailchimpapi_post_modules_mailchimp_templates_addtemplatefolder_create(
  payload
) {
  return mailchimpAPI.post(
    `/modules/mailchimp/templates/add-template-folder/`,
    payload.data
  )
}
export const apiService = {
  mailchimpapi_post_modules_mailchimp_templates_addtemplate_create,
  mailchimpapi_post_modules_mailchimp_templates_addtemplatefolder_create
}
