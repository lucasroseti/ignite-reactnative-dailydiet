export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      feedback: {
        meal: boolean
      }
      home: undefined
      meal: {
        id: string
      }
      'new-meal': { id: string } | undefined
      statistics: undefined
    }
  }
}