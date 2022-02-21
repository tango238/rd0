// Project
export const project_new = () => `/projects/new`
export const project_detail = (projectId: string) => `/projects/${projectId}`
export const project_page_new = (projectId: string) => `/projects/${projectId}/pages/new`
export const project_category_new = (projectId: string) => `/projects/${projectId}/c/new`

// Page
export const page_detail = (pageId: string) => `/pages/${pageId}`
export const page_item_new = (pageId: string) => `/pages/${pageId}/i/new`
export const page_item_detail = (pageId: string, itemId: string) => `/pages/${pageId}/i/${itemId}`

// Category
export const category_detail = (categoryId: string) => `/c/${categoryId}`

// Item
export const item_connection_new = (itemId: string) => `/i/${itemId}/cons/new`