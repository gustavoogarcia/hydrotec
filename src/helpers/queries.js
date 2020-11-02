import { gql } from "apollo-boost";

export const GET_CURRENT_USER = gql`
	query CurrentUser {
		currentUser {
      accessAreas
      jwt
		}
	}
`;

export const GET_USERS = gql`
  query users($query: String $offset: Int, $limit: Int) {
    users(query: $query, offset: $offset, limit: $limit){
      totalPages
      totalCount
      users {
        userFullName
        userName
        school
        level
        birthDate
        phones
        userRole
        cpf
        email
        _id
      }

    }
  }
`;

export const GET_USER = gql`
  query user($_id: String!) {
    user(_id: $_id) {
      _id
      profileImageURL
      userFullName
      userName
      userRoles{
        _id
        name
      }
      phones
			school
			level
			email
      birthDate
      cpf
			termsAccepted
			jwt
      bankAccounts{
        bank
			  agency
			  account
      }
		}
	}
`;

export const GET_ROLES = gql`
  query roles( $query: String $offset: Int, $limit: Int) {
    roles( query: $query, offset: $offset, limit: $limit){
			totalPages
      totalCount
      roles {
        _id
			  name
        access
      }
    }
  }
`;

export const GET_COMPANIES = gql`
  query companies( $query: String $offset: Int, $limit: Int) {
    companies( query: $query, offset: $offset, limit: $limit){
      totalPages
      totalCount
      companies {
        _id
        name
        phones
        address
        neighborhood
        zipCode
        city
        state
        country
        bankAccounts{
          bank
          account
          agency
        }
        socialReason
        cnpj
        userRelateds{
          _id
          userFullName
        }
      }
    }
  }
`;

export const COMPANY = gql`
  query company($_id: String!) {
    company(_id: $_id) {
      _id
      name
      phones
      address
			neighborhood
			stateRegistration
      zipCode
			city
			userRole
      state
      country
      socialReason
      cnpj
      bankAccounts {
        bank
        account
        agency
			}
			userRelateds{
        userFullName
        _id
      }
    }
  }
`;

export const GET_COMPANY = gql`
  query company($_id: String!) {
    company(_id: $_id) {
      _id
			name
      phones
      address
      neighborhood
      zipCode
      city
      state
      country
      socialReason
			cnpj
      bankAccounts {
        bank
        account
        agency
			}
			userRelateds{
        _id
        userFullName
      }
    }
  }
`;

export const USERS = gql`
	query users {
		users {
			_id
			userRole
			userFullName
			school
			level
			email
			birthDate
			termsAccepted
			newsSubscription
			jwt
			banks
		}
	}
`;

export const USER = gql`
	mutation getUser($_id: String!) {
		getUser(_id: $_id) {
      _id
      profileImageURL: String
      userFullName
      userName
      userRoles
      phones
			school
			level
			email
      birthDate
      cpf
			termsAccepted
			jwt
      bankAccounts{
        bank
			  agency
			  account
      }
      vouchersId
		}
	}
`;

export const GET_CAMPAIGN = gql`
  query campaign($_id: String!) {
    campaign(_id: $_id) {
			name
			shelfLife
			accessType
			duration
			required_fields
			_id
    }
  }
`;

export const ROLES = gql`
  query roles($subAccessArea: String, $query: String $offset: Int, $limit: Int) {
    roles(subAccessArea: $subAccessArea, query: $query, offset: $offset, limit: $limit) {
      totalPages
			totalCount
      roles {
        _id
        name
        access
      }

    }
  }
`;

export const GET_VOUCHER = gql`
  query voucher($_id: String!) {
    voucher(_id: $_id) {
			code
			profile
			isValid
			isActive
			rescueDate
			campaignId
			campaignVoucher
			clients{
				_id
				name
			}
			vendorIds{
				_id
				name
			}
			campaignIds{
				_id
				name
			}
    }
  }
`;


export const GET_ROLE = gql`
  query role($_id: String!) {
    role(_id: $_id) {
      name
      access
    }
  }
`;


export const GET_CONTENTS = gql`
  query contents($subAccessArea: String, $query: String $offset: Int, $limit: Int) {
    contents(subAccessArea: $subAccessArea, query: $query, offset: $offset, limit: $limit) {
			totalPages
			totalCount
			contents {
				_id
				coverURL
				title
				subTitle
				schoolCycles
				tags
				groups
				categories
				authors
				subAccessArea
			}
		}
  }
`;

export const GET_CAMPAIGNS = gql`
  query campaigns($query: String $offset: Int, $limit: Int) {
    campaigns(query: $query, offset: $offset, limit: $limit) {
      totalPages
			totalCount
      campaigns{
        _id
			name
      duration
			shelfLife
			accessType
      }
    }
  }
`;

export const GET_VOUCHERS = gql`
  query vouchers($query: String $offset: Int, $limit: Int) {
    vouchers(query: $query, offset: $offset, limit: $limit) {
      totalPages
			totalCount
			vouchers {
        _id
        code
        role {
          _id
          name
        }
        isValid
        isActive
        rescueDate
        campaign {
          _id
          name
        }
        client {
          _id
          name
        }
        vendor {
          _id
          name
        }
			}
    }
  }
`;

export const GET_STATIC_CONTENTS = gql`
  query staticContents($subAccessArea: String, $query: String $offset: Int, $limit: Int) {
    staticContents(subAccessArea: $subAccessArea, query: $query, offset: $offset, limit: $limit) {
			totalPages
			totalCount
			staticContents {
				_id
				coverURL
				title
				subTitle
        schoolCycles
        groups
				tags
				categories
				authors
        subAccessArea
        profiles
			}
		}
  }
`;

export const GET_STATIC_CONTENT = gql`
  query staticContent($_id: String!) {
    staticContent(_id: $_id) {
			_id
			subAccessArea
			title
			subTitle
			authors
			cast
			contentLength
			longDescription
			shortDescription
      schoolCycles
      groups
			categories
      tags
      profiles
			coverURL
      contentURL
		}
  }
`;

export const GET_CONTENT = gql`
  query content($_id: String!) {
    content(_id: $_id) {
			_id
			subAccessArea
			title
			subTitle
			authors
			groups
			longDescription
			shortDescription
			schoolCycles
			categories
			tags
			coverURL
			contents {
				_id
				type
				imageURL
				label
				contents {
					_id
					type
					imageURL
					label
					contents {
						_id
						type
						imageURL
						label
						contents {
							_id
							type
							imageURL
							label
							contents {
								_id
								type
								imageURL
								label
								contents {
									_id
									type
									imageURL
									label
								}
							}
						}
					}
				}
			}
		}
  }
`;

export const GET_ACCESS_AREAS = gql`
  query accessAreas($query: String $offset: Int, $limit: Int) {
    accessAreas(query: $query, offset: $offset, limit: $limit) {
      totalPages
			totalCount
      accessAreas{
        _id
        name
        label
      }
    }
  }
`;
