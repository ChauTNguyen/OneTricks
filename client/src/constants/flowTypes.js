// @flow

export type region =
  | "all" | "na" | "kr" | "euw" | "eune" | "lan" | "las" | "br" | "jp" | "tr" | "ru" | "oce"
  | "NA" | "KR" | "EUW" | "EUNE" | "LAN" | "LAS" | "BR" | "JP" | "TR" | "RU" | "OCE"
export type sortKey = "NONE" | "RANK" | "REGION" | "NAME" | "WINS" | "LOSSES" | "WINRATE" | "ONETRICKS"
export type rank = 'c' | 'm'

export type player = {
  champ: string,
  id: number,
  losses: number,
  name: string,
  rank: rank,
  region: region,
  wins: number,
  _id: number
}

export type winRateStats = { wins: number, losses: number }

export type state = {
  misc: {
    merged: boolean,
  },
}

export type toggleMerge = () => void
