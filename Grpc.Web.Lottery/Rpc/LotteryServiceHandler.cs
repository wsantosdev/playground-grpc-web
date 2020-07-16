using System;
using System.Linq;
using System.Threading.Tasks;
using Grpc.Web.Lottery.Models;

namespace Grpc.Web.Lottery.Rpc
{
    public class LotteryServiceHandler : LotteryService.LotteryServiceBase
    {
        override public Task<PlayReply> Play (PlayRequest request, Core.ServerCallContext context)
        {
            var result = LotteryDrawer.Draw();
            
            bool won = result.OrderBy(i => i)
                             .SequenceEqual(request.Numbers
                                                   .AsEnumerable()
                                                   .OrderBy(i => i));
            
            return Task.FromResult(new PlayReply { Message = $"Números sorteados: {string.Join('-', result)}. Você {(won ? "ganhou" : "perdeu")}!" });
        }
    }
}