// Project
export const project_detail = (projectId: string) => `/projects/${projectId}`
export const project_page_new = (projectId: string) => `/projects/${projectId}/pages/new`
export const project_type_new = (projectId: string) => `/projects/${projectId}/t/new`

// Page
export const page_detail = (pageId: string) => `/pages/${pageId}`
export const page_model_new = (pageId: string) => `/pages/${pageId}/m/new`
export const page_model_detail = (pageId: string, modelId: string) => `/pages/${pageId}/m/${modelId}`

// ModelType
export const model_type_detail = (modelTypeId: string) => `/t/${modelTypeId}`

// Model
export const model_connection_new = (modelId: string) => `/m/${modelId}/cons/new`