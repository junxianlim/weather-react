import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function average(data) {
  return _.round(_.sum(data)/data.length)
}

function Chart({data, color, units}) {
  return (
    <div>
      <Sparklines height={60} width={160} data={data}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(data)} {units}</div>
    </div>
  )
}

export default Chart;
