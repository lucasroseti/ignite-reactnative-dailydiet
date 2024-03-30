export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      feedback: {
        meal: boolean
      }
      home: undefined
      meal: {
        id: string
        daylistId: string
      }
      'new-meal': { id: string, daylistId: string } | undefined
      statistics: undefined
    }
  }
}