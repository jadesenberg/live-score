'use client';

import React, { useMemo } from 'react';
import { Match } from '@models/Match';
import { STATUS_LABELS, LABEL_COLORS } from '@/constants/status';
import {
  Card,
  Meta,
  Country,
  League,
  DateLabel,
  StatusLabel,
  Score,
  Teams,
  TeamName,
  MatchCircle,
  Minute,
  Divider,
} from './MatchCard.styled';


export default function MatchCard({ match }: { match: Match }) {
  const {
    competition,
    country,
    homeTeam,
    awayTeam,
    homeScore,
    awayScore,
    liveStatus,
    status,
    timestamp,
  } = match;

  const statusKey =
    liveStatus.toLowerCase() === 'canceled'
      ? 'canceled'
      : status.type;

  const isPreMatch = status.type === 'notstarted' && statusKey !== 'canceled';
  const isLive     = statusKey === 'inprogress';
  const isHT       = liveStatus === 'HT';
  const isFinished = statusKey === 'finished';

  const statusText = isPreMatch
    ? ''
    : STATUS_LABELS[statusKey] || '';

  const labelColor = LABEL_COLORS[statusKey] || LABEL_COLORS.default;
  const ringColor =
    isLive || isFinished
      ? LABEL_COLORS.finished
      : statusKey === 'canceled'
      ? LABEL_COLORS.canceled
      : LABEL_COLORS.default;

  const dateTime = useMemo(() => {
    const dt = new Date(timestamp * 1000);
    const date = dt
      .toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
      .toUpperCase();
    const time = dt.toLocaleTimeString('en-US', {
      hour: '2-digit', minute: '2-digit', hour12: false,
    });
    return `${date} ${time}`;
  }, [timestamp]);

  const minute = useMemo(() => {
    if (!isLive) return 0;
    const raw = parseInt(liveStatus.replace('+', ''), 10) || 0;
    return Math.min(Math.max(raw, 0), 90);
  }, [liveStatus, isLive]);

  const progress = isHT
    ? 50
    : isLive
    ? (minute / 90) * 100
    : 0;

  return (
    <Card>
      <Meta>
        <Country>{country}</Country>
        <League>{competition}</League>

        {isPreMatch ? (
          <DateLabel>{dateTime}</DateLabel>
        ) : (
          <StatusLabel $color={labelColor}>{statusText}</StatusLabel>
        )}
      </Meta>

      <Score>
        {homeScore.current} – {awayScore.current}
      </Score>

      <Teams>
        <TeamName $align="left">{homeTeam.name}</TeamName>

        <MatchCircle
          $color={ringColor}
          $isLive={isLive || isHT}
          $progress={progress}
        >
          {isHT ? (
            <Minute>HT</Minute>
          ) : isLive ? (
            <Minute>{`${minute}'`}</Minute>
          ) : isFinished ? (
            <Minute>FT</Minute>
          ) : null}
        </MatchCircle>

        <TeamName $align="right">{awayTeam.name}</TeamName>
      </Teams>

      <Divider />
    </Card>
  );
}
