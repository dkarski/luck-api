import {MatchingMemberService} from './matchingMemberService';
import {MemberRepository} from './member.repository';
import {IMember} from './member.model';

export class Member implements IMember {
    id: string = 'tes2';
    name: string;
    uniqueLink: string;
    matchedMemberId: string;

    constructor() {

    }


}