import { gql } from 'apollo-boost';

export const BankAccountInput = gql`
input BankAccountInput {
  bank: String
  agency: String
  account: String
}
`

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password, source: "admin") {
    jwt
		accessAreas
    }
  }
`;

export const ADD_USER = gql`
	mutation addUser(
		$userName: String
		$userFullName: String
		$phones: [String]
		$userRoles: [String]
		$school: String
		$level: [String]
    $email: String!
    $password: String!
    $cpf: String
    $profileImageURL: String
    $gender: String
		$birthDate: String
    $termsAccepted: Boolean!
    $newsSubscription: Boolean
    $bankAccounts: [BankAccountInput]
    $vouchersId: String
  ) {
		addUser(
			userName: $userName
			userFullName: $userFullName
      phones: $phones
      userRoles: $userRoles
			school: $school
			level: $level
      email: $email
      cpf: $cpf
      profileImageURL: $profileImageURL
      password: $password
      gender: $gender
			birthDate: $birthDate
      termsAccepted: $termsAccepted
      newsSubscription: $newsSubscription
      vouchersId: $vouchersId
      bankAccounts: $bankAccounts
		) {
      _id
			jwt
			userName
			userFullName
			phones
			school
			level
      email
      password
      gender
      cpf
      profileImageURL
      newsSubscription
			termsAccepted
      birthDate
      vouchersId{
          _id
          code
          isValid
          isActive
      }
			userRoles{
				_id
				name
			}
			bankAccounts{
				agency
				account
				bank
      }
		}
	}
`;

export const UPDATE_USER = gql`
	mutation updateUserDesloged(
		$_id: String!
    $userName: String
    $userFullName: String
    $cpf: String
    $userRoles: [String]
		$phones: [String]
		$school: String
		$level: [String]
    $email: String
    $gender: String
		$password: String
    $birthDate: String
    $profileImageURL: String
    $termsAccepted: Boolean
    $newsSubscription: Boolean
    $bankAccounts: [BankAccountInput]
    $vouchersId: [String]
	) {
		updateUserDesloged(
      _id: $_id
			userName: $userName
      userFullName: $userFullName
      cpf: $cpf
      userRoles: $userRoles
			phones: $phones
			school: $school
			level: $level
      email: $email
      gender: $gender
			password: $password
      birthDate: $birthDate
      newsSubscription: $newsSubscription
      profileImageURL: $profileImageURL
			termsAccepted: $termsAccepted
      bankAccounts: $bankAccounts
      vouchersId: $vouchersId
		) {
			_id
			jwt
			userName
      userFullName
      cpf
			school
			level
			phones
      email
      password
      gender
      profileImageURL
      newsSubscription
			termsAccepted
      birthDate
      vouchersId {
        _id
        code
        isValid
        isActive
      }
			userRoles{
				_id
				name
			}
			bankAccounts{
				bank
				agency
				account
			}
		}
	}
`;

export const REMOVE_USER = gql`
	mutation removeUser(
		$_id: String!
	) {
		removeUser(
			_id: $_id
		)
	}
`;

export const REMOVE_ACCESS_AREA = gql`
	mutation removeAccessArea(
		$_id: String!
	) {
		removeAccessArea(
			_id: $_id
		)
	}
`;

export const REMOVE_ROLE = gql`
	mutation removeRole(
		$_id: String!
	) {
		removeRole(
			_id: $_id
		)
	}
`;

export const REMOVE_VOUCHER= gql`
	mutation removeVoucher(
		$_id: String!
	) {
		removeVoucher(
			_id: $_id
		)
	}
`;

export const GENERATE_VOUCHERS= gql`
	mutation generateVoucher(
    $amount: Int!
    $roleId: String!
    $clientId: String!
    $vendorId: String!
    $campaignId: String!
    $isValid: Boolean!
    $isActive: Boolean!
	) {
		generateVoucher(
      amount: $amount
      roleId: $roleId
      clientId: $clientId
      vendorId: $vendorId
      campaignId: $campaignId
      isValid: $isValid
      isActive: $isActive
		)
	}
`;

export const UPDATE_VOUCHER = gql`
	mutation updateVoucher(
		$_id: String!
		$isValid: Boolean
	 	$isActive: Boolean
	 	$campaignIds: [String]
	 	$clients: [String]
    $vendorIds: [String]
	) {
		updateVoucher(
			_id: $_id
			isValid: $isValid
			isActive: $isActive
			campaignIds: $campaignIds
			clients: $clients
			vendorIds: $vendorIds
		) {
			_id
			isValid
			isActive
			campaignIds{
				_id
			}
			clients{
				_id
			}
			vendorIds{
				_id
			}
		}
	}
`;


// generateVoucher(
//   amount: String! -
//   profile: String! -
//   isValid: Boolean -
//   isActive: Boolean -
//   campaignIds: [String]
//   clients: [String]
//   rescueDate: String
  // vendorIds: [String]

export const REMOVE_STATIC_CONTENT = gql`
	mutation removeStaticContent(
		$_id: String!
	) {
		removeStaticContent(
			_id: $_id
		)
	}
`;

export const REMOVE_DINAMIC_CONTENT = gql`
	mutation removeDinamicContent(
		$_id: String!
	) {
		removeDinamicContent(
			_id: $_id
		)
	}
`;

export const REMOVE_COMPANY = gql`
	mutation removeCompany(
		$_id: String!
	) {
		removeCompany(
			_id: $_id
		)
	}
`;

export const ADD_COMPANY = gql`
	mutation addCompany(
		$name: String!
		$phones: [String]!
		$address: String
		$neighborhood: String
		$zipCode: String
		$state: String
		$country: String
		$bankAccounts: [BankAccountInput]
		$socialReason: String
		$cnpj: String
		$user: [String]
	) {
		addCompany(
			name: $name
			phones: $phones
			address: $address
			neighborhood: $neighborhood
			zipCode: $zipCode
			state: $state
			country: $country
			bankAccounts: $bankAccounts
			socialReason: $socialReason
			cnpj: $cnpj
			user: $user
		) {
			name
			phones
			address
			neighborhood
			zipCode
			state
			country
			bankAccounts{
				agency
				account
				bank
			}
			socialReason
			cnpj
			userRelateds{
				userFullName
				_id
			}
		}
	}
`;

export const UPDATE_COMPANY = gql`
	mutation updateCompany(
		$_id: String!
		$name: String
		$phones: [String]
		$address: String
		$neighborhood: String
    $zipCode: String
    $city: String
		$state: String
		$country: String
		$bankAccounts: [BankAccountInput]
		$socialReason: String
		$cnpj: String
    $user: [String]
	) {
		updateCompany(
			_id: $_id
			name: $name
			phones: $phones
			address: $address
			neighborhood: $neighborhood
			zipCode: $zipCode
      state: $state
      city: $city
			country: $country
			bankAccounts: $bankAccounts
			socialReason: $socialReason
			cnpj: $cnpj
      user:$user
		) {
			name
			phones
			address
			neighborhood
      zipCode
      city
      state
      country
			bankAccounts{
				agency
				account
				bank
			}
			socialReason
      cnpj
      user
		}
  }
`;

export const UPDATE_ROLE = gql`
	mutation updateRoles(
		$_id: String!
		$name: String
		$access: [String]
	) {
		updateRoles(
			_id: $_id
			access: $access
			name: $name
		) {
			name
			access
		}
  }
`;

export const ADD_CAMPAIGN = gql`
	mutation addCampaign(
		$name: String!
		$shelfLife: String
		$duration: String
    $accessType: String
    $accesses_released:[subAccessArea]
	) {
		addCampaign(
			name: $name
			shelfLife: $shelfLife
			duration: $duration
      accessType: $accessType
      accesses_released: $accesses_released
		) {
        _id
				name
				shelfLife
				duration
        accessType
        accesses_release
		}
	}
`;

export const UPDATE_CAMPAIGN = gql`
	mutation updateCampaign(
		$_id: String!
		$name: String
		$shelfLife: String
		$duration: String
    $accessType: String
    $accesses_released:[subAccessArea]
	) {
		updateCampaign(
			_id: $_id
			name: $name
			shelfLife: $shelfLife
			duration: $duration
      accessType: $accessType
      accesses_released: $accesses_released
		) {
				_id
				name
				shelfLife
				duration
        accessType
        accesses_released

		}
	}
`;

export const REMOVE_CAMPAIGN = gql`
	mutation removeCampaign(
		$_id: String!
	) {
		removeCampaign(
			_id: $_id
		)
	}
`;

export const ADD_ROLES = gql`
	mutation addRoles(
		$name: String!
		$access: [String]!
	) {
		addRoles(
			name: $name
			access: $access
		){
      name
      access
    }
	}
`;

export const UPLOAD_FILE = gql`
		mutation(
				$file:Upload
		) {
				uploadFile(
						file:$file
				)
		}
`;

export const ADD_STATIC_CONTENT= gql`
	mutation addStaticContent(
		$subAccessArea: String
		$title: String
		$subTitle: String
		$authors: [String]
		$shortDescription: String
		$longDescription: String
		$coverURL: String
		$contentURL: String
		$contentLength: String
		$schoolCycles: [String]
		$groups: [String]
		$categories: [String]
		$tags: [String]
		$profiles: [String]!
		$cast: [String]
		$audioType: [String]
	) {
		addStaticContent(
			subAccessArea:$subAccessArea
			title:$title
			subTitle:$subTitle
			authors: $authors
			shortDescription: $shortDescription
			longDescription:$longDescription
			coverURL: $coverURL
			contentURL: $contentURL
			contentLength:$contentLength
			schoolCycles:$schoolCycles
			groups: $groups
			categories: $categories
			tags: $tags
			profiles: $profiles
			cast: $cast
			audioType: $audioType
		) {
			subAccessArea
			title
			subTitle
			authors
			shortDescription
			longDescription
			coverURL
			contentURL
			contentLength
			schoolCycles
			groups
			categories
			tags
			profiles
			cast
			audioType
		}
	}
`;

export const ADD_DINAMIC_CONTENT= gql`
	mutation addDinamicContent(
		$subAccessArea: String
		$title: String
		$subTitle: String
		$authors: [String]
		$shortDescription: String
		$longDescription: String
		$coverURL: String
		$groups: [String]
		$schoolCycles: [String]
		$categories: [String]
		$tags: [String]
	) {
		addDinamicContent(
			subAccessArea:$subAccessArea
			title:$title
			subTitle:$subTitle
			authors: $authors
			shortDescription: $shortDescription
			longDescription:$longDescription
			coverURL: $coverURL
			groups:$groups
			schoolCycles:$schoolCycles
			categories: $categories
			tags: $tags
		) {
			subAccessArea
			title
			subTitle
			authors
			groups
			shortDescription
			longDescription
			coverURL
			schoolCycles
			categories
			tags
		}
	}
`;

export const UPDATE_STATIC_CONTENT = gql`
	mutation updateStaticContent(
		$_id: String!
		$subAccessArea: String
		$title: String
		$subTitle: String
		$authors: [String]
		$cast: [String]
		$longDescription: String
		$shortDescription: String
		$contentLength: String
		$schoolCycles: [String]
		$groups: [String]
		$categories: [String]
		$tags: [String]
		$profiles: [String]
		$coverURL: String
		$contentURL: String
		$audioType: [String]
	) {
		updateStaticContent(
			_id: $_id
			subAccessArea:$subAccessArea
			title:$title
			subTitle:$subTitle
			authors: $authors
			cast: $cast
			contentLength: $contentLength
			longDescription:$longDescription
			shortDescription: $shortDescription
			schoolCycles: $schoolCycles
			groups: $groups
			categories: $categories
			tags: $tags
			profiles: $profiles
			coverURL: $coverURL
			contentURL: $contentURL
			audioType: $audioType
		) {
			subAccessArea
			title
			subTitle
			authors
			longDescription
			shortDescription
			schoolCycles
			groups
			contentLength
			categories
			tags
			coverURL
			profiles
			contentURL
			audioType
		}
	}
`;

export const UPDATE_DINAMIC_CONTENT = gql`
	mutation updateDinamicContent(
		$_id: String!
		$subAccessArea: String
		$title: String
		$subTitle: String
		$authors: [String]
		$longDescription: String
		$shortDescription: String
		$groups: [String]
		$schoolCycles: [String]
		$categories: [String]
		$tags: [String]
		$coverURL: String
	) {
		updateDinamicContent(
			_id: $_id
			subAccessArea:$subAccessArea
			title:$title
			subTitle:$subTitle
			authors: $authors
			longDescription:$longDescription
			shortDescription: $shortDescription
			schoolCycles:$schoolCycles
			groups:$groups
			categories: $categories
			tags: $tags
			coverURL: $coverURL
		)
	}
`;

// export const GENERATE_VOUCHER = gql`
// 	mutation generateVoucher(
// 		$amount: String!
//     $profile: String!
//     $isValid: Boolean
//     $isActive: Boolean
//     $campaignIds: [String]
//     $clients: [String]
//     $rescueDate: String
//     $vendorIds: [String]

//     amount: String!
//       profile: String!
//       isValid: Boolean
//       isActive: Boolean
//       campaignIds: [String]
//       clients: [String]
//       rescueDate: String
//       vendorIds: [String]
// 	) {
// 		generateVoucher(
// 			amount:$amount
// 			profile:$profile
// 			isValid:$isValid
// 			isActive:$isActive
// 			campaignIds:$campaignIds
// 			clients:$clients
// 			rescueDate:$rescueDate
// 			vendorIds:$vendorIds
// 		) {
// 			profile
// 			isValid
// 			isActive
// 			rescueDate
// 		}
// 	}
// `;


export const UPDATE_CONTENT = gql`
	mutation updateContent(
		$_id: String
		$contents: String

	) {
		updateContent(
			_id: $_id
			contents: $contents
		) {
			_id
		}
	}
`;
