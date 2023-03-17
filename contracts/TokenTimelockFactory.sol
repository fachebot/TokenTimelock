// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/utils/TokenTimelock.sol";

contract TokenTimelockFactory {
    uint256 public lenght;
    TokenTimelock[] public lockers;

    event Deployed(
        TokenTimelock locker,
        IERC20 token,
        address beneficiary,
        uint256 releaseTime
    );

    function deploy(IERC20 token, address beneficiary, uint256 releaseTime) external {
        TokenTimelock locker = new TokenTimelock(token, beneficiary, releaseTime);

        lockers.push(locker);
        lenght++;

        emit Deployed(locker, token, beneficiary, releaseTime);
    }
}
