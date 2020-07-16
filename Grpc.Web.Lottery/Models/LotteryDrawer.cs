using System;
using System.Collections.Generic;
using System.Linq;

namespace Grpc.Web.Lottery.Models
{
    public class LotteryDrawer
    {
        private const int LotteryRange = 30;
        private const int NumbersToDraw = 6;
        private static readonly Random _random = new Random();

        public static IEnumerable<int> Draw()
        {
            int[] numbers = Enumerable.Range(1, LotteryRange).ToArray();
            
            for(int oldIndex = 0; oldIndex < LotteryRange -2; oldIndex++)
            {
                int newIndex = _random.Next(oldIndex, LotteryRange);
                
                (numbers[oldIndex], numbers[newIndex]) = (numbers[newIndex], numbers[oldIndex]);
            }

            return numbers.Take(NumbersToDraw);
        }
    }
}