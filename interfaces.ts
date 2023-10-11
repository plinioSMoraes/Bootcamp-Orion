interface IVowelsMap {
    [key: string]: number
}

interface IResults {
    word: string,
    vowelsCount: IVowelsMap,
    usage: string
}


export { IResults, IVowelsMap }

