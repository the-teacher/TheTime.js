(function() {

  Time.prototype.less = function(M) {
    if (M == null) {
      M = new Date;
    }
    M = Time.want(M);
    return this.unix_ms < M.unix_ms;
  };

  Time.prototype.less_or_equal = function(M) {
    if (M == null) {
      M = new Date;
    }
    M = Time.want(M);
    return this.unix_ms <= M.unix_ms;
  };

  Time.prototype.equal = function(M) {
    if (M == null) {
      M = new Date;
    }
    M = Time.want(M);
    return this.unix_ms === M.unix_ms;
  };

  Time.prototype.greater_or_equal = function(M) {
    if (M == null) {
      M = new Date;
    }
    M = Time.want(M);
    return this.unix_ms >= M.unix_ms;
  };

  Time.prototype.greater = function(M) {
    if (M == null) {
      M = new Date;
    }
    M = Time.want(M);
    return this.unix_ms > M.unix_ms;
  };

  Time.prototype.l = function(M) {
    return this.less(M);
  };

  Time.prototype.loe = function(M) {
    return this.less_or_equal(M);
  };

  Time.prototype.e = function(M) {
    return this.equal(M);
  };

  Time.prototype.goe = function(M) {
    return this.greater_or_equal(M);
  };

  Time.prototype.g = function(M) {
    return this.greater(M);
  };

}).call(this);
