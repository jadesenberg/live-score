'use client';

import React from 'react';
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
import useFormattedDate from '@/hooks/useFormattedDate';
import useMatchMinute from '@/hooks/useMatchMinute';
import getStatusKey from '@/lib/utils';

interface MatchCardProps {
  match: Match;
}

export default function MatchCard({ match }: MatchCardProps) {
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

  const statusKey = getStatusKey(liveStatus, status.type);
  const isPreMatch = status.type === 'notstarted' && statusKey !== 'canceled';
  const isLive = statusKey === 'inprogress';
  const isHT = liveStatus === 'HT';
  const isFinished = statusKey === 'finished';

  const dateTime = useFormattedDate(timestamp);
  const minute = useMatchMinute(liveStatus, isLive);

  const progress = isHT ? 50 : isLive ? (minute / 90) * 100 : 0;
  const statusText = isPreMatch ? '' : STATUS_LABELS[statusKey] ?? '';
  const labelColor = LABEL_COLORS[statusKey] ?? LABEL_COLORS.default;

  const ringColor = (() => {
    if (isLive || isFinished) return LABEL_COLORS.finished;
    if (statusKey === 'canceled') return LABEL_COLORS.canceled;
    return LABEL_COLORS.default;
  })();

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
