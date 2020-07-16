/**
 * @fileoverview gRPC-Web generated client stub for Lottery
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.Lottery = require('./Lottery_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.Lottery.LotteryServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.Lottery.LotteryServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Lottery.PlayRequest,
 *   !proto.Lottery.PlayReply>}
 */
const methodDescriptor_LotteryService_Play = new grpc.web.MethodDescriptor(
  '/Lottery.LotteryService/Play',
  grpc.web.MethodType.UNARY,
  proto.Lottery.PlayRequest,
  proto.Lottery.PlayReply,
  /**
   * @param {!proto.Lottery.PlayRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Lottery.PlayReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Lottery.PlayRequest,
 *   !proto.Lottery.PlayReply>}
 */
const methodInfo_LotteryService_Play = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Lottery.PlayReply,
  /**
   * @param {!proto.Lottery.PlayRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Lottery.PlayReply.deserializeBinary
);


/**
 * @param {!proto.Lottery.PlayRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Lottery.PlayReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Lottery.PlayReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Lottery.LotteryServiceClient.prototype.play =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Lottery.LotteryService/Play',
      request,
      metadata || {},
      methodDescriptor_LotteryService_Play,
      callback);
};


/**
 * @param {!proto.Lottery.PlayRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Lottery.PlayReply>}
 *     A native promise that resolves to the response
 */
proto.Lottery.LotteryServicePromiseClient.prototype.play =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Lottery.LotteryService/Play',
      request,
      metadata || {},
      methodDescriptor_LotteryService_Play);
};


module.exports = proto.Lottery;

